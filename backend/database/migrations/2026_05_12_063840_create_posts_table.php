<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Bảng posts: tin tức / sự kiện / thông cáo báo chí Đại hội Đoàn XIII.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title', 500);
            $table->string('slug', 500)->unique();
            $table->enum('category', ['chuan_bi', 'cac_cap', 'chao_mung', 'thong_cao'])
                  ->default('chuan_bi');
            $table->text('excerpt')->nullable();
            $table->longText('content')->nullable();
            $table->string('featured_image', 500)->nullable();
            $table->unsignedInteger('views')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->enum('status', ['draft', 'published'])->default('draft');
            $table->timestamp('published_at')->nullable();
            $table->foreignId('author_id')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
            $table->softDeletes();

            $table->index(['status', 'published_at']);
            $table->index('category');
            $table->index('is_featured');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
