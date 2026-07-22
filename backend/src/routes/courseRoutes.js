import { Router } from "express";
import { getCourses } from "../controllers/course/getCourses.js";

const router = Router();

router.get('/getCourses', getCourses);

router.post('/addCourse', addCourse );

router.post('/myCourses', myCourse )


export default router;
