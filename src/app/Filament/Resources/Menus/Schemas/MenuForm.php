<?php

namespace App\Filament\Resources\Menus\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class MenuForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('メニュー情報')
                    ->schema([
                        TextInput::make('name')
                            ->label('メニュー名')
                            ->required()
                            ->maxLength(255),

                        Textarea::make('description')
                            ->label('説明')
                            ->rows(4),

                        TextInput::make('price')
                            ->label('価格')
                            ->numeric()
                            ->required()
                            ->suffix('円'),

                        FileUpload::make('image')
                            ->label('メニュー画像')
                            ->directory('menus')
                            ->image()
                            ->imageEditor(),

                        Toggle::make('is_recommended')
                            ->label('おすすめメニュー'),

                        TextInput::make('sort_order')
                            ->label('表示順')
                            ->numeric()
                            ->default(0),
                    ]),
            ]);
    }
}