import { Register_Model } from "@/data-access/models/register.model";
import type {
  FastifyPluginAsyncTypebox,
  TypeBoxTypeProvider,
} from "@fastify/type-provider-typebox";

const advertisement: FastifyPluginAsyncTypebox = async (
  fastify,
  opts
): Promise<void> => {
  fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .get("/", async (request: any, reply: any) => {
      try {
        const response = await Register_Model.find();
        return response;
      } catch (error) {
        return error;
      }
    })
    .post("/", async (request: any, reply) => {
      try {
        const { body } = request;
        const new_student = await Register_Model.create(body);
        if (new_student) {
          return {
            message: "Registered successfully",
            data: new_student,
          };
        } else {
          return {
            message: "Something went wrong",
          };
        }
      } catch (error) {
        return error;
      }
    });
};

export default advertisement;
