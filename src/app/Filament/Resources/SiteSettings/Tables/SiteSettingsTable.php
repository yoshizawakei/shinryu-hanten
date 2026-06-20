<?php

namespace App\Filament\Resources\SiteSettings\Tables;

use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class SiteSettingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('store_name')
                    ->label('店舗名'),

                TextColumn::make('phone')
                    ->label('電話番号'),

                TextColumn::make('updated_at')
                    ->label('更新日')
                    ->dateTime('Y-m-d H:i'),
            ])
            ->recordActions([
                EditAction::make(),
            ]);
    }
}