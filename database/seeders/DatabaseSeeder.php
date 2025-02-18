<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         // Seed the roles table
         Role::factory()->count(4)->create();

         // Superadmin user
         $Superadmin = User::factory()->create([
             'name' => 'Super Admin',
             'email' => 'superadmin@example.com',
             'role_id' => 1,
             'phone_number' => '+1234567890',
         ]);

         // Admin user
         User::factory()->count(2)->create();
    }
}
