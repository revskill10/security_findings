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
import { Item } from "src/database/models/item";
import { modelToDomain } from "src/database/mappers/item-mapper";
@Route("api/v1")
export class ItemsController extends Controller {
    @Get("items")
    public async getItems(
    ): Promise<{ data: ItemProps[] }> {
        const dbResult = await Item.query()
            .withGraphFetched('findings')
            .orderBy('id')
        const httpResponse = dbResult.map(modelToDomain);
        return { data: httpResponse };
    }

    @Get("items/{itemId}")
    public async getItem(
        @Path() itemId: string,
    ): Promise<{ data: ItemProps }> {
        const dbResult = await Item.query()
            .findById(itemId)
            .withGraphFetched('findings')
        if (!dbResult) throw new Error('Not found');
        const httpResponse = modelToDomain(dbResult);
        return { data: httpResponse };
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