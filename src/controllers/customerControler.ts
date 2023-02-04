import { createCustomer } from "../models/customer";
import { customerService } from "../services/customerService";

export class customerControler {

    public createCustomer = async (user: createCustomer) => {
        console.log("controller.ts")
        // const errors = []
        // if(!user.userId){
        //     errors.push("missing userId")
        // }
        // if(!user.userDetails){
        //     errors.push("missing userDetails object");
        //     throw new Error(errors.join("\n"));
        // }

        // const requiredBody: any[] = ["name","email","emailVerified","picture"]
        // for(const item of requiredBody){
        //     if(!requiredBody[item]){
        //         errors.push(item);
        //     }
        // }

        // if(errors.length > 0){
        //     throw new Error(errors.join("\n"));
        // }

        try{
            console.log("constoller try",user)
            return await customerService.createCustomer(user);
        } catch(error) {
            console.log("error :",error);
            throw (error);
        }
    }
}