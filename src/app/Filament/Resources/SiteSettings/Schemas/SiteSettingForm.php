<?php

namespace App\Filament\Resources\SiteSettings\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class SiteSettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                TextInput::make('store_name')
                    ->label('店舗名')
                    ->required(),

                TextInput::make('phone')
                    ->label('電話番号'),

                TextInput::make('address')
                    ->label('住所'),

                Textarea::make('description')
                    ->label('店舗紹介')
                    ->rows(5),

                Textarea::make('business_hours')
                    ->label('営業時間')
                    ->rows(3),

                Textarea::make('google_map_url')
                    ->label('GoogleMap埋め込みURL'),

                Textarea::make('adsense_footer')
                    ->label('フッター広告コード')
                    ->rows(6),
            ]);
    }
}