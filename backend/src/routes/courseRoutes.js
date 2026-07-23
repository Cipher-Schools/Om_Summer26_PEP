import { Router } from "express";
import { getCourses } from "../controllers/course/getCourses.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { addCourse } from "../controllers/course/addCourse.js";

const router = Router();

router.get('/get-courses', getCourses);

router.post('/create-course', authenticate, authorize('instructor', 'admin'), addCourse );

// router.post('/myCourses', myCourse )


export default router;
