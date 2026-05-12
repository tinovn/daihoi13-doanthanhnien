<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Bảng thong_diep: thông điệp gửi Đại hội (cần moderation trước khi publish).
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('thong_diep', function (Blueprint $table) {
            $table->id();
            $table->string('name', 200);
            $table->string('location', 200)->nullable();
            $table->text('message');
            $table->string('image_url', 500)->nullable();
            $table->json('keywords')->nullable();
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->foreignId('approved_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('approved_at')->nullable();
            $table->string('ip_address', 45)->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('thong_diep');
    }
};
