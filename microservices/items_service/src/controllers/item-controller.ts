import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Route,
    SuccessResponse,
} from "tsoa";
import type { ItemCreationParams, ItemProps } from "items-domain";
import items from '../mocks/items';
@Route("api/v1")
export class ItemsController extends Controller {
    @Get("items")
    public async getItems(
    ): Promise<{ data: ItemProps[] }> {
        return { data: items };
    }

    @Get("items/{itemId}")
    public async getItem(
        @Path() itemId: string,
    ): Promise<{ data: ItemProps }> {
        return { data: items[0] };
    }

    @SuccessResponse("201", "Created") // Custom success response
    @Post("item")
    public async createItem(
        @Body() requestBody: ItemCreationParams
    ): Promise<void> {
        this.setStatus(201); // set return status 201
        return;
    }
}