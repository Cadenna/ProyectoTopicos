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
                'id' => 3,
                'name' => 'Tenis Amarillos',
                'description' => 'Description of product 1',
                'image' => 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/634e3efc-b675-4d2d-8e95-a8087cca9b13/calzado-air-force-1-07-pro-tech-GG5zvd.png',
                'price' => 10.99,
                'stock' => 50,
                'tipo' => 'Type 1',
                'category_id' =>'1'
            ],
            [
                'id' => 4,
                'name' => 'Tenis Cafes',
                'description' => 'Description of product 2',
                'image' => 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d14fc386-1067-4a72-961e-9f8134680703/calzado-dunk-low-4W2Z5P.png',
                'price' => 20.99,
                'stock' => 30,
                'tipo' => 'Type 2',
                'category_id' =>'2'
            ],
            // Agrega más productos si es necesario
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
