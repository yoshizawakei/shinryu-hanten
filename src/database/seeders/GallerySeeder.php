<?php

namespace Database\Seeders;

use App\Models\Gallery;
use Illuminate\Database\Seeder;

class GallerySeeder extends Seeder
{
    public function run(): void
    {
        $galleries = [
            ['title' => '店内の様子',     'image' => 'galleries/gallery1.jpg', 'sort_order' => 1],
            ['title' => 'テーブル席',     'image' => 'galleries/gallery2.jpg', 'sort_order' => 2],
            ['title' => '落ち着いた雰囲気', 'image' => 'galleries/gallery3.jpg', 'sort_order' => 3],
            ['title' => 'お食事の一場面', 'image' => 'galleries/gallery4.jpg', 'sort_order' => 4],
            ['title' => '料理の盛り付け', 'image' => 'galleries/gallery5.jpg', 'sort_order' => 5],
            ['title' => '厨房の様子',     'image' => 'galleries/gallery6.jpg', 'sort_order' => 6],
            ['title' => 'ランチタイム',   'image' => 'galleries/gallery7.jpg', 'sort_order' => 7],
            ['title' => '料理へのこだわり', 'image' => 'galleries/gallery8.jpg', 'sort_order' => 8],
            ['title' => '記念日・宴会にも', 'image' => 'galleries/gallery9.jpg', 'sort_order' => 9],
        ];

        foreach ($galleries as $item) {
            Gallery::create($item);
        }
    }
}
