<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Type;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('assets', function (Blueprint $table) {
            // required columns
            $table->id();
            // customize columns
            $table->string("name");
            $table->text("description")->nullable();
            $table->foreignIdFor(Type::class); // creates a type_id column with Foreign Key
            $table->dateTime("addition_time")->nullable();
            $table->enum('priority', ['Low', 'Medium', "High"]);
            // required columns
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assets');
    }
};
