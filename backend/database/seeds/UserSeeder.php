<?php

use App\Address;
use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        $faker = \Faker\Factory::create();
        
        for ($i = 0; $i < 50; $i++) {
            $user = User::create([
                'name' => $faker->name,
                'email' => $faker->email,
                'phone' => $faker->tollFreePhoneNumber
            ]);
            Address::create([
                'user_id' => $user->id,
                'cep' => $faker->numberBetween(30000000,70000000),
                'number' => $faker->buildingNumber,
                'street' => $faker->streetName,
                'complement' => $faker->name,
                'district' => $faker->streetName,
                'city' => $faker->city,
                'state' => $faker->stateAbbr,
            ]);
        } 
    }
}
