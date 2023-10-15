<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('notes', function (Blueprint $table) {
            // required columns
            $table->id();
            // customize columns
            $table->unsignedBigInteger('asset_id')->index();
            $table->text("note");
            // required columns
            $table->timestamps();
            $table->softDeletes();
            //***
            // FK
            $table
                ->foreign('asset_id')
                ->references('id')
                ->on('assets')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notes');
    }
};
