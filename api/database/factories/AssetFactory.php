<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Type;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Asset>
 */
class AssetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => fake()->name(),
            "description" => fake()->sentence(),
            "type_id" => Type::all()->random()->id, // get a random id from Type Eloquent
            "addition_time" => fake()->dateTimeThisMonth(),
            "priority"=>fake()->randomElement(['Low' ,'Medium', 'High']),
        ];
    }
}
