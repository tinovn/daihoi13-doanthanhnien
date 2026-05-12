<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Bảng dai_bieu: đại biểu chính thức Đại hội XIII (auth riêng qua mã + CCCD + OTP).
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('dai_bieu', function (Blueprint $table) {
            $table->id();
            $table->string('code', 20)->unique();
            $table->string('cccd', 20)->nullable()->index();
            $table->string('name', 200);
            $table->string('email', 120)->nullable();
            $table->string('phone', 20)->nullable();
            $table->string('province', 100)->nullable();
            $table->string('organization', 255)->nullable();
            $table->string('password', 255)->nullable();
            $table->enum('status', ['active', 'suspended'])->default('active');
            $table->timestamp('last_login_at')->nullable();
            $table->rememberToken();
            $table->timestamps();

            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dai_bieu');
    }
};
