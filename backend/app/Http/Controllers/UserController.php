<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Services\UserService;

class UserController extends Controller
{
    public function index()
    {
        return UserService::findAll();
    }
    
    public function find(int $id)
    {
        $user = UserService::findWithAddress($id);
        return response()->json($user, 200);
    }
    
    public function store(UserRequest $request)
    {
        $user = UserService::store($request);
        return response()->json($user, 201);
    }
    
    public function update(UserRequest $request, int $id)
    {
        $user = UserService::update($request, $id);
        return response()->json($user, 200);
    }
    
    public function delete(int $id)
    {
        UserService::delete($id);
        return response()->json(null, 204);
    }
}
