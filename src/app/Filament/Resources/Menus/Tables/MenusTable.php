<?php

namespace App\Filament\Resources\Menus\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class MenusTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('sort_order')
            ->columns([
                ImageColumn::make('image')
                    ->label('画像'),

                TextColumn::make('name')
                    ->label('商品名')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('price')
                    ->label('価格')
                    ->money('JPY')
                    ->sortable(),

                IconColumn::make('is_recommended')
                    ->label('おすすめ')
                    ->boolean(),

                TextColumn::make('sort_order')
                    ->label('表示順')
                    ->sortable(),

                TextColumn::make('created_at')
                    ->label('作成日')
                    ->dateTime('Y-m-d')
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}