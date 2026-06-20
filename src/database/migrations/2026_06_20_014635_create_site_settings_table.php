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
        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();
            $table->string('store_name');

            $table->string('phone')->nullable();

            $table->string('address')->nullable();

            $table->text('description')->nullable();

            $table->text('business_hours')->nullable();

            $table->string('holiday')->nullable();

            $table->string('instagram_url')->nullable();

            $table->string('line_url')->nullable();

            $table->text('google_map_url')->nullable();

            $table->text('adsense_footer')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site_settings');
    }
};
