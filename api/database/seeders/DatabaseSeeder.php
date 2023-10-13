<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seed types lookup table for initial asset types:
        $this->call([
            TypeSeeder::class,
        ]);
    }
}
