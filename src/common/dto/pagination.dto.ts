import { IsNumber, IsOptional, IsPositive, Min } from "class-validator"


export class PaginationDto  {
    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
  limit?:  Number

  @IsOptional()
  @IsPositive()
  @IsNumber()
  offset?: Number
}