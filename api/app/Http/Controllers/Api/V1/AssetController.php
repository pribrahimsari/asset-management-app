<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Asset;
use App\Http\Resources\AssetResource;
use App\Http\Requests\StoreAssetRequest;
use App\Http\Requests\UpdateAssetRequest;

class AssetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // todo: improve the pagination: should support sortBy
        return AssetResource::collection(Asset::paginate(20));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAssetRequest $request)
    {
        //
        $asset = Asset::create($request->validated());
        return AssetResource::make($asset);
    }

    /**
     * Display the specified resource.
     */
    public function show(Asset $asset)
    {
        //
        return AssetResource::make($asset);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAssetRequest $request, Asset $asset)
    {
        $asset->update($request->validated());
        return AssetResource::make($asset);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Asset $asset)
    {
        $asset->delete();
        return response()->noContent();
    }
}
