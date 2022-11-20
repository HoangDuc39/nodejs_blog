const express = require('express')
const router =express.Router()

const courseController = require('../app/controllers/CourseController')

router.get('/create',courseController.create)
router.post('/store',courseController.store)
router.get('/:id/edit',courseController.edit)
router.post('/handle-form-actions',courseController.handleFormActions)
router.post('/:id',courseController.update)
router.post('/:id/restore',courseController.restore)
router.post('/:id/delete',courseController.destroy)
router.post('/:id/force',courseController.forceDestroy)
router.get('/:slug',courseController.show)

module.exports = router;
