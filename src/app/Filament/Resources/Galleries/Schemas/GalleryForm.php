<?php

namespace App\Filament\Resources\Galleries\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class GalleryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('image')
                    ->label('店舗写真')
                    ->image()
                    ->directory('gallery')
                    ->required(),

                TextInput::make('sort_order')
                    ->label('表示順')
                    ->numeric()
                    ->default(0)
                    ->required(),
            ]);
    }
}