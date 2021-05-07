<?php

namespace App\Http\Services;

use App\User;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UserService
{
    public static function find(int $id): User
    {
        try {
            return User::find($id);
        } catch (Exception $e) {
            throw new Exception("Erro ao buscar usuário");
            Log::error($e->getMessage());
        }
    }

    public static function findWithAddress(int $id): User
    {
        try {
            return User::with('address')->where('id', $id)->first();
        } catch (Exception $e) {
            throw new Exception("Erro ao buscar usuário");
            Log::error($e->getMessage());
        }
    }

    public static function findAll(): Collection
    {
        try {
            return User::with('address')->get();
        } catch (Exception $e) {
            throw new Exception("Erro ao buscar usuários");
            Log::error($e->getMessage());
        }
    }

    public static function store(Request $request): User
    {
        try {
            DB::beginTransaction();
            $user = User::create($request->all());
            AddressService::store($request->except(['name', 'phone', 'email']), $user->id);
            DB::commit();

            return User::create($request->all());
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception("Erro ao cadastrar usuário");
            Log::error($e->getMessage());
        }
    }

    public static function update(Request $request, int $id): User
    {
        try {
            DB::beginTransaction();
            $user = self::find($id);
            $user->update($request->all());
            AddressService::update($request->except(['name', 'phone', 'email']), $user->address->id);
            DB::commit();

            return $user;
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception("Erro ao atualizar usuário");
            Log::error($e->getMessage());
        }
    }

    public static function delete(int $id): void
    {
        try {
            $user = self::find($id);
            $user->delete();
        } catch (Exception $e) {
            throw new Exception("Erro ao excluir usuário");
            Log::error($e->getMessage());
        }
    }
}