<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Bảng van_kien: tài liệu / văn kiện Đại hội (Dự thảo, Chính thức, Infographic, E-Magazine).
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('van_kien', function (Blueprint $table) {
            $table->id();
            $table->foreignId('dai_hoi_id')->nullable()->constrained('dai_hoi')->nullOnDelete();
            $table->enum('type', ['du_thao', 'gop_y', 'chinh_thuc', 'infographic', 'emagazine'])
                  ->default('du_thao');
            $table->string('title', 500);
            $table->text('description')->nullable();
            $table->string('file_url', 500)->nullable();
            $table->string('file_size', 20)->nullable();
            $table->string('file_type', 10)->nullable();
            $table->unsignedInteger('download_count')->default(0);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();

            $table->index('type');
            $table->index('published_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('van_kien');
    }
};
