<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $products = [
            [
                'id' => 1,
                'name' => 'Tenis Amarillos',
                'description' => 'Description of product 1',
                'image' => 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/634e3efc-b675-4d2d-8e95-a8087cca9b13/calzado-air-force-1-07-pro-tech-GG5zvd.png',
                'price' => 10.99,
                'stock' => 50,
                'tipo' => 'Type 1',
                'category_id' =>'1'
            ],
            [
                'id' => 2,
                'name' => 'Tenis Cafes',
                'description' => 'Description of product 2',
                'image' => 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d14fc386-1067-4a72-961e-9f8134680703/calzado-dunk-low-4W2Z5P.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 3,
                'name' => 'Tenis Blancos',
                'description' => 'Description of product 3',
                'image' => 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dc00106-fc9f-4a89-b149-036de9516aa8/calzado-talla-grande-blazer-mid-77-fQhb6q.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 4,
                'name' => 'Nike Air Max 97 Futtura',
                'description' => 'Description of product 4',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/06d14d5e-9779-466e-9498-793390d84a94/calzado-air-max-97-futura-NqX78c.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 5,
                'name' => 'Nike Flex Runner 2 Lil',
                'description' => 'Description of product 5',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/347030fc-1d7a-47dc-931c-e2ecab703697/calzado-talla-peque%C3%B1a-flex-runner-2-lil-j4D8fq.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 6,
                'name' => 'Tenis Blancos',
                'description' => 'Description of product 6',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/27586871-84e2-4115-9d47-1bc584dd5cd3/calzado-grandes-court-legacy-lqhzF1.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 7,
                'name' => 'Air Jordan 1 Low',
                'description' => 'Description of product 7',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b587cf81-b49a-4200-9a7c-8daa033ed393/calzado-air-jordan-1-low-VxJvhl.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 8,
                'name' => 'Jumpman Two Trey',
                'description' => 'Description of product 8',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f6bb75e3-f86b-4031-9265-4343b1e14bd7/calzado-jumpman-two-trey-rg6GNh.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 1',
                'category_id' =>'1'
            ],
            [
                'id' => 9,
                'name' => 'Air Jordan 1 Mid',
                'description' => 'Description of product 9',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e3f0e4ba-f063-4308-885f-a2e64e3c6a14/calzado-grandes-air-jordan-1-mid-bTcGkl.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 10,
                'name' => 'Air Jordan 1 Low OG',
                'description' => 'Description of product 2',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7bc90fad-4278-4ba2-b9a0-a463927c0fee/calzado-grandes-air-jordan-1-low-og-SR5bqn.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 11,
                'name' => 'Nike Air Max 1 LX',
                'description' => 'Description of product 11',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c1e8f4c5-7b42-4242-8795-a5860e02b5aa/calzado-air-max-1-60-jTtMWn.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 12,
                'name' => 'Nike Air Max 90',
                'description' => 'Description of product 12',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ae915c34-5252-4b66-a8c6-99efbaae5963/calzado-air-max-90-xLMml6.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 13,
                'name' => 'Jordan 23/7',
                'description' => 'Description of product 13',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/428066ae-4dff-43d9-b023-f482fa82d7e0/calzado-e-infantil-jordan-23-7-81vn2M.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 14,
                'name' => 'Jordan 2 Retro',
                'description' => 'Description of product 14',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/82a64bc3-491e-4086-b6b4-09910014bec0/calzado-e-infantil-jordan-2-retro.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 15,
                'name' => 'Nike Vomero 17',
                'description' => 'Description of product 15',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/644a59b8-a6d3-4966-a150-fe444d735d66/calzado-de-running-en-carretera-vomero-17-R7R0Rc.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 1',
                'category_id' =>'1'
            ],
            [
                'id' => 16,
                'name' => 'Nike Pegasus 40 Premium',
                'description' => 'Description of product 16',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2d4834e1-8b8f-4d45-a626-c36ee35c26f9/calzado-de-running-en-carretera-pegasus-40-premium-lZFTQQ.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 1',
                'category_id' =>'1'
            ],
            [
                'id' => 17,
                'name' => 'Nike Star Runner 4',
                'description' => 'Description of product 17',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fea36855-a5ae-4788-beac-258670a1aeb9/calzado-de-running-en-carretera-grandes-star-runner-4-dHGq3V.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            [
                'id' => 18,
                'name' => 'Nike Air Max Excee',
                'description' => 'Description of product 18',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55d463fa-73c6-40da-a43e-04f1d2112853/calzado-grandes-air-max-excee-PxvdC0.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 19,
                'name' => 'Nike Blazer Mid',
                'description' => 'Description of product 19',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7f393827-5851-47a1-b581-c0543096617c/calzado-grandes-blazer-mid-77-jgcVlb.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 3',
                'category_id' =>'3'
            ],
            [
                'id' => 20,
                'name' => 'Nike Air Flight Lite',
                'description' => 'Description of product 20',
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/453370bc-38e6-4f0d-b6df-4b19b007455a/calzado-air-flight-lite-mid-tr22fR.png',
                'price' => 20.99,
                'stock' => 20,
                'tipo' => 'Type 1',
                'category_id' =>'1'
            ]
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
