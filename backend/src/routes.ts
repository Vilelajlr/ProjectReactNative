import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyReply,
    FastifyRequest
} from 'fastify';

import { CreateNutritionController } from './controllers/CreateNutritionController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {

        let responseTExt = "```json\n{\n  \"nome\": \"Jose\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 22,\n  \"altura\": 1.72,\n  \"peso\": 78,\n  \"objetivo\": \"Emagrecer\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Cafe da Manha\",\n      \"alimentos\": [\n        \"1 fatia de pao integral\",\n        \"1 ovo cozido\",\n        \"1 banana\",\n        \"1 copo de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manha\",\n        \"alimentos\": [\n        \"1 iogurte grego natural\",\n        \"1 colher de sopa de granola\"\n      ]\n    },\n    {\n      \"horario\": \"12:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis cozido\",\n        \"Salada de folhas verdes\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da Tarde\",\n      \"alimentos\": [\n        \"1 maçã\",\n        \"1 colher de sopa de pasta de amendoim\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe grelhado\",\n        \"1 xícara de batata doce cozida\",\n        \"1 xícara de couve refogada\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Proteína do soro do leite\",\n    \"Creatina\",\n    \"Glutamina\",\n    \"Multivitamínico\"\n  ]\n}\n```";


        try {
            
            //Extrair o JSON
            let jsonString = responseTExt.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();

            let jsonObject = JSON.parse(jsonString);

            return reply.send({data: jsonObject});

        } catch (error) {
            console.log(error);
        }


        reply.send({ok: true})
    });

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
        
        return new CreateNutritionController().handle(request, reply);

    });


}