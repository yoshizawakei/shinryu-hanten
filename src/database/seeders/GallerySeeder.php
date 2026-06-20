<?php

namespace Database\Seeders;

use App\Models\Gallery;
use Illuminate\Database\Seeder;

class GallerySeeder extends Seeder
{
    public function run(): void
    {
        $galleries = [
            ['title' => '店内の様子', 'image' => 'galleries/gallery1.jpg', 'sort_order' => 1],
            ['title' => 'テーブル席', 'image' => 'galleries/gallery2.jpg', 'sort_order' => 2],
            ['title' => '麻婆豆腐',   'image' => 'galleries/gallery3.jpg', 'sort_order' => 3],
            ['title' => '海鮮チャーハン', 'image' => 'galleries/gallery4.jpg', 'sort_order' => 4],
            ['title' => '北京ダック',  'image' => 'galleries/gallery5.jpg', 'sort_order' => 5],
            ['title' => '餃子',       'image' => 'galleries/gallery6.jpg', 'sort_order' => 6],
            ['title' => '外観',       'image' => 'galleries/gallery7.jpg', 'sort_order' => 7],
            ['title' => '厨房',       'image' => 'galleries/gallery8.jpg', 'sort_order' => 8],
            ['title' => '杏仁豆腐',   'image' => 'galleries/gallery9.jpg', 'sort_order' => 9],
        ];

        foreach ($galleries as $item) {
            Gallery::create($item);
        }
    }
}
