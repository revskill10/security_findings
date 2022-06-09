import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Route,
    SuccessResponse,
} from "tsoa";
import { ItemCreationParams, ItemProps } from "../types";
import items from '../mocks/items';
@Route("api/v1/items")
export class ItemsController extends Controller {
    @Get("")
    public async getItems(
    ): Promise<{ data: ItemProps[] }> {
        return { data: items };
    }

    @Get("{itemId}")
    public async getItem(
        @Path() itemId: string,
    ): Promise<{ data: ItemProps }> {
        return { data: items[0] };
    }

    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createItem(
        @Body() requestBody: ItemCreationParams
    ): Promise<void> {
        this.setStatus(201); // set return status 201
        return;
    }
}