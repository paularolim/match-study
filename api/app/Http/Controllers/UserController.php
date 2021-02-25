<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index() {
        return response()->json(['message' => 'Users']);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'birth_date' => 'required|date',
            'schooling' => 'required|string'
        ]);

        try {
            $user = new User;

            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->password = $request->input('password');
            $user->birth_date = $request->input('birth_date');
            $user->schooling = $request->input('schooling');

            $user->save();

            return response()->json(['user' => $this, 'message' => 'User created successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'User registration failed', 'error' => $e->getMessage()]);
        }
    }

    //
}
