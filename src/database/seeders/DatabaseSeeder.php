<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@shinryu-hanten.jp',
        ]);

        $this->call([
            SiteSettingSeeder::class,
            MenuSeeder::class,
            GallerySeeder::class,
        ]);
    }
}
