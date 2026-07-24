import { Router } from "express";
import { getCourses } from "../controllers/course/getCourses.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { addCourse } from "../controllers/course/addCourse.js";
import { myCourse } from "../controllers/course/myCourse.js";
import { enrollCourse } from "../controllers/course/enrollCourse.js";

const router = Router();

router.get('/get-courses', getCourses);

router.post('/create-course', authenticate, authorize('instructor', 'admin'), addCourse );

router.get('/my-course', authenticate, authorize('student', 'instructor'), myCourse );

router.post('/enroll-course', authenticate, authorize('student'), enrollCourse);

export default router;
