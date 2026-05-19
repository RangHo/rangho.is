;;; extract-org-node.el --- Extract metadata from Org-node zettelkasten files. -*- lexical-binding: t; -*-

;; Author: RangHo Lee <hello@rangho.me>

;;; Commentary:

;;; Code:

(require 'json)
(require 'org)
(require 'org-id)
(require 'package)
(require 'use-package)
(require 'use-package-ensure)

;; Set up package management.
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/") t)
(package-initialize)

;; Install Org-node.
(use-package org-node
  :ensure t
  :custom
  (org-mem-do-sync-with-org-id t)
  :config
  (org-mem-updater-mode +1)
  (org-node-cache-mode +1))

;; Read command line arguments.
(setq extract-org-node--out-file (car command-line-args-left))
(setq extract-org-node--org-files (cdr command-line-args-left))

;; Analyze all files.
(org-id-update-id-locations extract-org-node--org-files)
(org-mem-updater-update t)

(princ (format "%d entries and %d links found.\n\n" (length (org-mem-all-entries)) (length (org-mem-all-links))))

;; Load all vertices.
(setq extract-org-node--vertex-jsons nil)
(dolist (entry (org-mem-all-entries))
  (when (org-mem-entry-id entry)
    (add-to-list 'extract-org-node--vertex-jsons
                 (json-serialize
                  `(:title ,(org-mem-entry-title entry)
                    :id ,(org-mem-entry-id entry)
                    :file ,(org-mem-entry-file entry))))))

;; Load all edges.
(setq extract-org-node--edge-jsons nil)
(dolist (link (org-mem-all-links))
  (when (string= (org-mem-link-type link) "id")
    (add-to-list 'extract-org-node--edge-jsons
                 (json-serialize
                  `(:description ,(org-mem-link-description link)
                    :file ,(org-mem-link-file link)
                    :pos ,(org-mem-link-pos link)
                    :from ,(org-mem-link-nearby-id link)
                    :to ,(org-mem-link-target link))))))

;; Write the data to file.
(with-temp-file extract-org-node--out-file
  (let* ((vertex-list (string-join extract-org-node--vertex-jsons ","))
         (edge-list (string-join extract-org-node--edge-jsons ","))
         (document (format "{\"vertices\":[%s],\"edges\":[%s]}"
                           vertex-list
                           edge-list))
         (encoded (decode-coding-string document 'utf-8)))
    (insert encoded)))

(provide 'extract-org-node)

;;; extract-org-node.el ends here
