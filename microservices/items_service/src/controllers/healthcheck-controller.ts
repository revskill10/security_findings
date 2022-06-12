import {
    Controller,
    Get,
    Route,
} from "tsoa";
import { db } from 'src/database/db';
@Route("healthcheck")
export class HealthcheckController extends Controller {
    @Get("")
    public async healthCheck(
    ): Promise<{ status: string }> {
        await db.from("items").select();
        return { status: 'ok' };
    }
}