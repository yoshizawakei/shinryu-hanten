<?php

namespace App\Filament\Resources\Menus\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class MenuForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('メニュー名')
                    ->required()
                    ->maxLength(255),

                RichEditor::make('description')
                    ->label('説明')
                    ->columnSpanFull(),

                TextInput::make('price')
                    ->label('価格')
                    ->numeric()
                    ->required()
                    ->prefix('¥'),

                FileUpload::make('image')
                    ->label('商品画像')
                    ->image()
                    ->directory('menus')
                    ->imageEditor(),

                Toggle::make('is_recommended')
                    ->label('おすすめ')
                    ->default(false),

                TextInput::make('sort_order')
                    ->label('表示順')
                    ->numeric()
                    ->default(0)
                    ->required(),
            ]);
    }
}