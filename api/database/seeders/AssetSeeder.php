<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Asset;

class AssetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // todo: we may need to comment out the line below when api is done
        Asset::truncate();

        // 35 random records are fine for now
        Asset::factory(35)->create();
    }
}
