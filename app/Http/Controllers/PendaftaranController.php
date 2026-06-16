<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PendaftaranController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'full_name'    => 'required|string|max:255',
            'email'        => 'required|email|max:255',
            'phone_number' => 'required|string|max:20',
            'intention'    => 'required|string',
            'message'      => 'nullable|string',
        ]);

        DB::table('users')->insert([
            'full_name'    => $request->full_name,
            'email'        => $request->email,
            'phone_number' => $request->phone_number,
            'intention'    => $request->intention,
            'message'      => $request->message,
            'created_at'   => now(),
            'updated_at'   => now(),
        ]);

        return redirect('/daftar')->with('success', 'Data berhasil dikirim!');
    }
}