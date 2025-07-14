import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UserDto {
    @IsString()
    @ApiProperty({example: 'b3b84e2d-08b2-4a71-84b5-b8212b3a4cce'})
    id: string;

    @ApiProperty({example: 'user_2UmeNH9qA6cjKHz6FzBcM8b7wC'})
    clerkId: string;

    @ApiProperty({example: 'user@example.com', required: true})
    email: string;

    @ApiProperty({example: 'Jane Doe', required: true})
    name: string;
}

export class createUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;
}