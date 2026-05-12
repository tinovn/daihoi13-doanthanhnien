<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Bảng map_status: trạng thái Đại hội Đoàn cấp tỉnh trên bản đồ 63 tỉnh.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('map_status', function (Blueprint $table) {
            $table->id();
            $table->string('province', 100)->unique();
            $table->date('event_date')->nullable();
            $table->integer('delegates')->nullable();
            $table->enum('status', ['completed', 'ongoing', 'preparing', 'not_yet'])
                  ->default('not_yet');
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('map_status');
    }
};
