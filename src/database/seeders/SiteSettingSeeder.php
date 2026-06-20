<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class SiteSettingSeeder extends Seeder
{
    public function run(): void
    {
        SiteSetting::create([
            'store_name'     => '神龍飯店',
            'phone'          => '046-257-8618',
            'address'        => '〒252-0028 神奈川県座間市入谷東4-43-24',
            'description'    => '神奈川県座間市にある本格中華料理店です。花椒・豆板醤など本場の食材を使った中国料理を、家庭的な雰囲気でご提供しています。座間駅から徒歩4分。',
            'business_hours' => "月・水〜日　11:30 〜 14:30 / 17:00 〜 22:00\n※ラストオーダーは閉店30分前",
            'holiday'        => '火曜日・第4水曜日',
            'instagram_url'  => '',
            'google_map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.4!2d139.3912!3d35.4809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019b6e1d33ee08b%3A0xea5bd5b35cd3cd36!2z56We6b6N6aOB5pu4!5e0!3m2!1sja!2sjp!4v1720000000000!5m2!1sja!2sjp',
            'adsense_footer' => '',
        ]);
    }
}
