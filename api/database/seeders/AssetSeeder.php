<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Asset;
use App\Models\Tag;
use Illuminate\Support\Facades\DB;

class AssetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // todo: we may need to comment out the line below when api is done

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Tag::truncate();
        Asset::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // 35 random records are fine for now
        Asset::factory(35)
            ->create()
            ->each(function ($asset){
                Tag::factory(rand(0,3))->create([
                    "asset_id"=>$asset->id,
                    "label"=>ucwords(fake()->words(rand(1,2), true))
                ]);
            });
    }
}
