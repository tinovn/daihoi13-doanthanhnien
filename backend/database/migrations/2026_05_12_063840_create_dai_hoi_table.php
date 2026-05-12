<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Bảng dai_hoi: 13 kỳ Đại hội Đoàn TNCS Hồ Chí Minh.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('dai_hoi', function (Blueprint $table) {
            $table->id();
            $table->string('roman', 10)->unique();
            $table->smallInteger('year');
            $table->string('slug', 100)->unique();
            $table->string('title', 500);
            $table->string('time_range', 100)->nullable();
            $table->string('location', 255)->nullable();
            $table->text('theme')->nullable();
            $table->string('leader_name', 255)->nullable();
            $table->string('leader_photo', 500)->nullable();
            $table->string('delegates_count', 50)->nullable();
            $table->string('members_count', 50)->nullable();
            $table->json('movements')->nullable();
            $table->longText('description')->nullable();
            $table->json('highlights')->nullable();
            $table->json('gallery_images')->nullable();
            $table->json('documents')->nullable();
            $table->integer('order')->default(0);
            $table->timestamps();

            $table->index('year');
            $table->index('order');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dai_hoi');
    }
};
