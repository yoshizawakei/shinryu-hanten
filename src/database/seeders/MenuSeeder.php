<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    public function run(): void
    {
        $menus = [
            // ── おすすめメニュー ──
            [
                'name'           => '麻婆豆腐',
                'description'    => '花椒の痺れる辛さが特徴の本格四川風麻婆豆腐。なめらかな豆腐にコクのある辛みダレが絡む絶品です。',
                'price'          => 880,
                'image'          => 'menus/menu5.jpg',
                'is_recommended' => true,
                'sort_order'     => 1,
            ],
            [
                'name'           => '海鮮チャーハン',
                'description'    => 'エビ・ホタテ・イカを贅沢に使ったパラパラ炒飯。香ばしい焦がし醤油の香りが食欲をそそります。',
                'price'          => 980,
                'image'          => 'menus/menu3.jpg',
                'is_recommended' => true,
                'sort_order'     => 2,
            ],
            [
                'name'           => '北京ダック',
                'description'    => '皮はパリッと、身はジューシー。甜麺醤と薄餅に包んでお召し上がりください（要予約・2人前〜）。',
                'price'          => 3800,
                'image'          => 'menus/menu4.jpg',
                'is_recommended' => true,
                'sort_order'     => 3,
            ],
            [
                'name'           => '回鍋肉',
                'description'    => '豚バラ肉とキャベツを豆板醤・甜麺醤で炒めた定番四川料理。白ごはんに合う濃厚な味付け。',
                'price'          => 780,
                'image'          => 'menus/menu9.jpg',
                'is_recommended' => true,
                'sort_order'     => 4,
            ],
            [
                'name'           => 'エビのチリソース',
                'description'    => 'プリプリの海老を特製チリソースで炒めました。甘辛いソースにご飯がすすむ人気の一品。',
                'price'          => 1080,
                'image'          => 'menus/menu6.jpg',
                'is_recommended' => true,
                'sort_order'     => 5,
            ],
            [
                'name'           => '杏仁豆腐',
                'description'    => 'なめらかな口当たりの自家製デザート。フルーツと特製シロップを添えてお出しします。',
                'price'          => 380,
                'image'          => 'menus/menu7.jpg',
                'is_recommended' => true,
                'sort_order'     => 6,
            ],
            // ── 一品料理 ──
            [
                'name'           => '小籠包（4個）',
                'description'    => 'ジューシーなスープが溢れ出す本格小籠包。生姜入り醤油ダレで召し上がれ。',
                'price'          => 680,
                'image'          => 'menus/menu1.jpg',
                'is_recommended' => false,
                'sort_order'     => 7,
            ],
            [
                'name'           => '担々麺',
                'description'    => 'ゴマ・豆板醤・花椒を効かせた濃厚スープ。辛さは3段階からお選びいただけます。',
                'price'          => 950,
                'image'          => 'menus/menu8.jpg',
                'is_recommended' => false,
                'sort_order'     => 8,
            ],
            [
                'name'           => '春巻き（3本）',
                'description'    => '野菜と春雨を包んだカリッと揚げたての春巻き。甘酢ダレでどうぞ。',
                'price'          => 420,
                'image'          => 'menus/menu2.jpg',
                'is_recommended' => false,
                'sort_order'     => 9,
            ],
            [
                'name'           => '酢豚',
                'description'    => '揚げた豚肉と彩り野菜を甘酢あんで絡めた定番中華。子どもから大人まで大人気のひと皿。',
                'price'          => 880,
                'image'          => 'menus/menu10.jpg',
                'is_recommended' => false,
                'sort_order'     => 10,
            ],
        ];

        foreach ($menus as $menu) {
            Menu::create($menu);
        }
    }
}
