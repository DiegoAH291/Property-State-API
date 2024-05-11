import { Router } from "express";

/*====Controllers ====*/
import filterPropertiesByStatusController from "../../controllers/filter_properties_by_status_controller/filter_properties_by_status_controller";
import createPropertyController from "../../controllers/create_property_controller/create_property_controller";
import deletePropertyController from "../../controllers/delete_property_controller/delete_property_controller";
import getPropertiesController from "../../controllers/get_properties_controller/get_properties_controller";
import testApiController from "../../controllers/test_api_controller/test_api_controller";
import getUserController from "../../controllers/getUserController/getUserController";
import signupController from "../../controllers/signup_controller/signup_controller";

const router = Router();

router.get("/property/filter/status", filterPropertiesByStatusController);
router.get("/property/properties", getPropertiesController);
router.delete("/property/delete", deletePropertyController);
router.post("/property/add", createPropertyController);
router.post("/auth/signup", signupController);
router.get("/auth/user", getUserController);
router.get("/test", testApiController);

export default router;
