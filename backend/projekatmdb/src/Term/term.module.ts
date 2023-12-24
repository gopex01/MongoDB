import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TermSchema } from "./term.schema";
import { TermService } from "./term.service";
import { TermController } from "./term.controller";
import { BorderCrossService } from "src/BorderCross/bc.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BorderCrossEntity } from "src/BorderCross/bc.entity";

@Module({
    imports:[MongooseModule.forFeature([{name:'Term', schema:TermSchema}]),
    TypeOrmModule.forFeature([BorderCrossEntity])],
    providers:[TermService,BorderCrossService],
    controllers:[TermController]
})
export class TermModule{}