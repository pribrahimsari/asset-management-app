<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use App\Models\Type;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // not necessary for now
        // Type::truncate();

        // asset type list from: https://www.investopedia.com/terms/d/digital-asset-framework.asp
        $file = File::get("database/data/initialAssetTypesSeederData.json");
        $initialAssetTypes = json_decode($file);

        foreach ($initialAssetTypes as $value) {
            // will check the record.
            // if not exists, it'll create. OR if exists, it will not affect
            Type::firstOrCreate([
                "type_name" => $value
            ]);
        }
    }
}
