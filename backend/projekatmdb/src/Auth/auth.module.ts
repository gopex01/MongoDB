import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { BorderCrossModule } from "src/BorderCross/bc.module";
import { AdminModule } from "src/Admin/admin.module";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/User/user.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strateg";
import { JwtStrategy } from "./jwt.strateg";
@Module({
    imports:[JwtModule.register({
        secret:jwtConstants.secret,
        signOptions:{expiresIn:'60m'}
    }),
    BorderCrossModule,
    AdminModule,
    PassportModule,
    UserModule],
    providers:[AuthService,LocalStrategy,JwtStrategy],
    exports:[AuthService]
})
export class AuthModule{}